## This is an example app with NextJS 14, running in Docker, with NodeJS for server side stuffs

How to build the app and run it in Docker.  This container can also be deployed to any cloud provider that supports Docker (which is all of them), or hosted on your own server with Docker.
```bash
docker build -t example-app .
docker run -p 3000:3000 example-app
```

Sample Output of the commands above:
```bash
PS C:\src\personal\example-app> docker build -t example-app .  
[+] Building 41.3s (19/20)                                                                                           docker:default
 => [internal] load build definition from Dockerfile                                                                           0.1s
 => => transferring dockerfile: 2.21kB                                                                                         0.0s
 => [internal] load .dockerignore                                                                                              0.1s
 => => transferring context: 2B                                                                                                0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                              2.0s
 => [internal] load build context                                                                                             17.6s
 => => transferring context: 311.84MB                                                                                         17.5s
 => [base 1/1] FROM docker.io/library/node:18-alpine@sha256:3428c2de886bf4378657da6fe86e105573a609c94df1f7d6a70e57d2b51de21f   3.0s
 => => resolve docker.io/library/node:18-alpine@sha256:3428c2de886bf4378657da6fe86e105573a609c94df1f7d6a70e57d2b51de21f        0.0s
 => => sha256:96526aa774ef0126ad0fe9e9a95764c5fc37f409ab9e97021e7b4775d82bf6fa 3.40MB / 3.40MB                                 0.6s
 => => sha256:9d90236787e1e9b0554a96dbbf5b19dad289e8e7852729121676d95fd23658ed 39.97MB / 39.97MB                               1.4s
 => => sha256:3ee93fa199db1a16f5a4ad8d091793b9d10edaa41155ee325162acfae0dba8e0 2.34MB / 2.34MB                                 0.2s 
 => => sha256:3428c2de886bf4378657da6fe86e105573a609c94df1f7d6a70e57d2b51de21f 1.43kB / 1.43kB                                 0.0s 
 => => sha256:1c19c701b3f22fa88681630d3acac968b1b0b944b51b57e17041d37ddccab579 1.16kB / 1.16kB                                 0.0s 
 => => sha256:5f07bdccd6fdbfdfc0385884a895b21f2b0a6bae900a9b07385853ef94adcb80 7.14kB / 7.14kB                                 0.0s 
 => => sha256:ec38686b8231bee4573d38bab53177aec26196542113d93a669eb34186cb4797 452B / 452B                                     0.5s 
 => => extracting sha256:96526aa774ef0126ad0fe9e9a95764c5fc37f409ab9e97021e7b4775d82bf6fa                                      0.1s 
 => => extracting sha256:9d90236787e1e9b0554a96dbbf5b19dad289e8e7852729121676d95fd23658ed                                      1.2s 
 => => extracting sha256:3ee93fa199db1a16f5a4ad8d091793b9d10edaa41155ee325162acfae0dba8e0                                      0.0s 
 => => extracting sha256:ec38686b8231bee4573d38bab53177aec26196542113d93a669eb34186cb4797                                      0.0s 
 => [builder 1/4] WORKDIR /app                                                                                                 1.9s 
 => [deps 1/4] RUN apk add --no-cache libc6-compat                                                                             2.3s 
 => [runner 2/8] RUN addgroup --system --gid 1001 nodejs                                                                       0.3s 
 => [runner 3/8] RUN adduser --system --uid 1001 nextjs                                                                        1.0s 
 => [deps 2/4] WORKDIR /app                                                                                                    0.1s 
 => [deps 3/4] COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./                                              0.3s 
 => [deps 4/4] RUN   if [ -f yarn.lock ]; then yarn --frozen-lockfile;   elif [ -f package-lock.json ]; then npm ci;   elif [  6.2s 
 => [builder 2/4] COPY --from=deps /app/node_modules ./node_modules                                                            1.3s 
 => [builder 3/4] COPY . .                                                                                                     2.0s 
 => [builder 4/4] RUN yarn build                                                                                              10.5s 
 => CACHED [runner 4/8] COPY --from=builder /app/public ./public                                                               0.0s 
 => CACHED [runner 5/8] RUN mkdir .next                                                                                        0.0s 
 => CACHED [runner 6/8] RUN chown nextjs:nodejs .next                                                                          0.0s 
 => ERROR [runner 7/8] COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./                                      0.0s 
------
 > [runner 7/8] COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./:
------
Dockerfile:54
--------------------
  52 |     # Automatically leverage output traces to reduce image size
  53 |     # https://nextjs.org/docs/advanced-features/output-file-tracing
  54 | >>> COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
  55 |     COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
  56 |
--------------------
ERROR: failed to solve: failed to compute cache key: failed to calculate checksum of ref 2741ab8f-335c-4654-a18a-ca9dea81035d::pmh8sds6rliyioks71tlqcaxz: "/app/.next/standalone": not found
PS C:\src\personal\example-app> docker build -t example-app .
[+] Building 19.1s (21/21) FINISHED                                                                                  docker:default
 => [internal] load build definition from Dockerfile                                                                           0.0s
 => => transferring dockerfile: 2.21kB                                                                                         0.0s 
 => [internal] load .dockerignore                                                                                              0.0s 
 => => transferring context: 2B                                                                                                0.0s 
 => [internal] load metadata for docker.io/library/node:18-alpine                                                              0.6s 
 => [internal] load build context                                                                                              0.5s
 => => transferring context: 1.36MB                                                                                            0.4s 
 => [base 1/1] FROM docker.io/library/node:18-alpine@sha256:3428c2de886bf4378657da6fe86e105573a609c94df1f7d6a70e57d2b51de21f   0.0s 
 => CACHED [runner 1/8] WORKDIR /app                                                                                           0.0s 
 => CACHED [runner 2/8] RUN addgroup --system --gid 1001 nodejs                                                                0.0s 
 => CACHED [runner 3/8] RUN adduser --system --uid 1001 nextjs                                                                 0.0s
 => CACHED [deps 1/4] RUN apk add --no-cache libc6-compat                                                                      0.0s 
 => CACHED [deps 2/4] WORKDIR /app                                                                                             0.0s 
 => CACHED [deps 3/4] COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./                                       0.0s 
 => CACHED [deps 4/4] RUN   if [ -f yarn.lock ]; then yarn --frozen-lockfile;   elif [ -f package-lock.json ]; then npm ci;    0.0s 
 => CACHED [builder 2/4] COPY --from=deps /app/node_modules ./node_modules                                                     0.0s 
 => [builder 3/4] COPY . .                                                                                                     1.6s 
 => [builder 4/4] RUN yarn build                                                                                              14.9s 
 => [runner 4/8] COPY --from=builder /app/public ./public                                                                      0.0s 
 => [runner 5/8] RUN mkdir .next                                                                                               0.3s 
 => [runner 6/8] RUN chown nextjs:nodejs .next                                                                                 0.5s 
 => [runner 7/8] COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./                                            0.2s 
 => [runner 8/8] COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static                                    0.1s 
 => exporting to image                                                                                                         0.2s 
 => => exporting layers                                                                                                        0.2s 
 => => writing image sha256:55f4088956d22b4144fc425ccdba1a7c2f76672d7903e5a18af9dd0f51592769                                   0.0s 
 => => naming to docker.io/library/example-app                                                                                 0.0s 

What's Next?
  1. Sign in to your Docker account → docker login
  2. View a summary of image vulnerabilities and recommendations → docker scout quickview
PS C:\src\personal\example-app> docker run -p 3000:3000 example-app
   ▲ Next.js 14.0.2
   - Local:        http://localhost:3000
   - Network:      http://0.0.0.0:3000

 ✓ Ready in 41ms
```