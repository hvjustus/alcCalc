# AlcCalc 🍻

Descubra a forma mais barata de ficar bêbado mais rápido.

O AlcCalc compara bebidas alcoólicas pelo custo-benefício: você informa nome, preço, quantidade e teor alcoólico (ABV), e o app calcula quantos mL de álcool puro você leva por real gasto — ordenando tudo do mais em conta pro mais caro.

(esse readme é ia mas eu juro que fiz sem)

## Versões

- **Web**: https://alc-calc.vercel.app (rodando `/www` em Vercel)
- **Android**: APK nativo via Capacitor

## Funcionalidades

- 📱 App nativo Android (construído com Capacitor)
- 🌐 Versão web em Vercel
- 🍷 Cadastro de bebidas com nome, preço, quantidade (L ou mL) e ABV
- 📊 Cálculo automático de mL de álcool por real (mL/R$)
- 📈 Ordenação automática da mais barata pra mais cara
- 🗑️ Remoção de itens da lista
- 💾 Dados salvos localmente (persistem ao fechar/reabrir)
- 🌙 Dark mode / light mode com preferência salva

## Instalação (Android)

1. **Baixe o APK** do [releases](https://github.com/hvjustus/alcCalc/releases) ou compile você mesmo (ver seção abaixo)
2. **No seu Android**: transfira o `app-release.apk` para o celular via USB ou baixe direto
3. **Abra o arquivo** e toque em **Instalar** (pode precisar permitir instalação de fontes desconhecidas nas configurações)
4. **Pronto** — ícone da garrafa estará na sua home screen

## Desenvolvimento

### Tecnologias

- **Frontend**: HTML, CSS, JavaScript vanilla
- **Mobile**: Android nativo via [Capacitor](https://capacitorjs.com/)
- **Build**: Gradle + Android SDK
- **Deploy Web**: Vercel

### Como compilar

Pré-requisitos:
- Node.js
- Android Studio (com SDK/emulator)
- JDK 17+

Passos:

```bash
# Clone o repo
git clone https://github.com/hvjustus/alcCalc.git
cd alcCalc

# Instale dependências
npm install

# Sincronize com Android (copia web files → android project)
npx cap sync

# Abra Android Studio
npx cap open android
```

No Android Studio, hit **Run** (▶️) para buildar e rodar no emulator/phone.

### Deploy web (Vercel)

O `/www` é automaticamente deployado em Vercel quando você faz push pra `main`.

```bash
git push origin main
```

Vercel rebuilda e publica em https://alccalc.vercel.app

### Gerar Release APK

Já com signing key configurado:

```bash
cd android
./gradlew assembleRelease
```

APK sai em `android/app/build/outputs/apk/release/app-release.apk`.

## Estrutura
