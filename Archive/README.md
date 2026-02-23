# Eunoia Quest Landing Page

A Next.js 15 landing page for "Eunoia Quest" - a video-gamified assessment platform.

## How to Build

### Prerequisites
- Node.js 20.x or higher
- npm (comes with Node.js)

### Installation & Build

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for production:**
   ```bash
   npm run build
   ```
   
   This creates an optimized production build with standalone output for Docker deployment.

3. **Run production build locally:**
   ```bash
   npm run start
   ```

### Development

Run the development server with Turbopack:
```bash
npm run dev
```

The app will be available at [http://localhost:9002](http://localhost:9002) (custom port).

### Environment Variables

Create a `.env.local` file for local development:
```bash
GOOGLE_GENAI_API_KEY=your_api_key_here
```

### Docker Deployment

For containerized deployment:
```bash
docker-compose up -d
```

See [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) for detailed Docker setup instructions.

---

To get started with development, explore [src/app/page.tsx](src/app/page.tsx).
