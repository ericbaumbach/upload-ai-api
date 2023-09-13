import {fastify} from 'fastify'
import {fastifyCors} from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { postUploadVideoRoute } from './routes/upload-video'
import { postCreateTranscriptionRoute } from './routes/create-transcription'
import { postGenerateAiCompletionRoute} from './routes/generate-ai-completion'

const app = fastify()

app.register(fastifyCors, {
    origin: '*'
})

app.get('/', () => {
    return 'Hello world'
})

app.register(getAllPromptsRoute)
app.register(postUploadVideoRoute)
app.register(postCreateTranscriptionRoute)
app.register(postGenerateAiCompletionRoute)

app.listen({
    port: 3333
}).then(() => {
    console.log("HTTP server running...")
})