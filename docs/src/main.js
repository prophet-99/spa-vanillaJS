import { router } from './routes/index.routes.js';

window.addEventListener( 'DOMContentLoaded', (_) => router() );
window.addEventListener( 'hashchange', (_) => router() );