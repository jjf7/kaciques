import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
app.set('PORT', process.env.PORT || 3001)

// Middlewares
app.use(cors())
app.use(morgan('dev'))

// Routes
app.get('/', (req, res) => {
    res.send('Welcome')
})

export default app