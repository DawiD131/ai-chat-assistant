module.exports = {
    apps: [
        {
            name: 'ai-chat-assistant',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
