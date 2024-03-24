const express = require('express');
const app = express();

const PORT = 5173;

// Express 서버가 5173 포트에서 실행되도록 설정
app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`);
});

// Vite 개발 서버 실행
const vite = require('vite');
(async () => {
    const viteServer = await vite.createServer({
        server: { port: 3000 } // Vite 개발 서버 포트 설정
    });
    await viteServer.listen();
    console.log('Vite development server is running at http://localhost:3000');
})();