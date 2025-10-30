# -------------------------
# 1. Build stage
# -------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
# Use --frozen-lockfile if you have a lockfile for reproducible builds
RUN npm ci --legacy-peer-deps

# Copy all source code
COPY . .

# Build the Next.js app
RUN npm run build

# -------------------------
# 2. Production stage
# -------------------------
FROM node:20-alpine AS runner
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./

# Expose port 3000
EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "start"]
