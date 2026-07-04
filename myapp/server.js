const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align:center; margin-top:50px; font-family:Arial;">
            <h1>🚀 Aplicación Web Desplegada con Éxito</h1>
            <p>Evaluación Transversal - Infraestructura de Aplicaciones I</p>
            <p><strong>Estado:</strong> Operativa dentro de Docker en AWS</p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Aplicación corriendo internamente en el puerto ${PORT}`);
});
