# Text To Speech :speaking_head:

Tecnologías utilizadas:

- Node JS 12 & Cognitive Services Speech SDK
- Azure (Servicio Text To Speech)

---

Esta aplicación puede:

- **Procesar texto a audio en formato `.mp3` mediante una Inteligencia Artificial de Azure**

### Instalación

```sh
git clone https://github.com/juliogarciape/text-to-speech-node-azure
cd text-to-speech-node-azure
npm install
npm run start
```

> Debes tener una cuenta en Microsoft Azure para poder consumir el servicio `text to speech` (plan gratuito) y al crear tu servicio recibirás la clave secreta para asignarla en `SECRET_KEY`

### Variables de Entorno

Esta aplicación necesita las siguientes variables de entorno:

- `AUDIO_FILE` nombre del archivo de salida (recuerda poner `.mp3`)
- `REGION` región donde asignaste tu servicio de texto a voz
- `SECRET_KEY` clave secreta obtenida al crear tu servicio en Azure
