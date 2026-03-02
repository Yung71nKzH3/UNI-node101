import { spawnSync } from 'child_process';

const targetPath = process.argv[2];
if (!targetPath) {
    console.error("No file provided to run");
    process.exit(1);
}

// Convert Windows backslashes to Linux forward slashes
const linuxPath = targetPath.replace(/\\/g, '/');

// Execute the final file using node within the docker container
const result = spawnSync('node', [linuxPath], { stdio: 'inherit' });

// Exit with the same code as the child process
process.exit(result.status || 0);
