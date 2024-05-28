import bcrypt from 'bcrypt';
import { loginService } from '../services/auth.service.js';

const login = async (req, res) => {
    const { email, senha } = req.body;
    
    try{
        const user = await loginService(email)

        if(!user){
            return res.status(401).send({ message: 'User or password invalid'});
        }
        const senhaIsValid = bcrypt.compareSync(senha, user.senha);

        if(!senhaIsValid){
            return res.status(401).send({ message: 'User or password invalid'});
        }
        res.send('Logged in successfully!')    
    } catch (error) {
        res.status(500).send('Internal server error');
        console.error(error);
    }
}

export { login };