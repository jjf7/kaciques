import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import categoriesRoutes from './routes/categories.routes'
import productsRoutes from './routes/products.routes'
import settingsRoutes from './routes/settings.routes'
import usersRoutes from './routes/user.routes'
import { createSetting, removeAllProducts, createRoles, createAdmin, removeAllUsers } from './libs/initialSetup'
import authRoutes from "./routes/auth.routes";
import Role from './models/Role'
const app = express()
//removeAllProducts()
//removeAllUsers();
createRoles();
createAdmin();
createSetting()
app.set('PORT', process.env.PORT || 3001)
// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// Routes
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use(categoriesRoutes)
app.use(productsRoutes)
app.use(settingsRoutes)
app.use(usersRoutes)
app.use(authRoutes)
app.get('/roles', async (req, res) => {
    
    const roles = await Role.find()
    res.json(roles)

})

export default app