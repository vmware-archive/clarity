const { spawn } = require('child_process');

const packageJson = require('../package.json');
const packages = ['@clr/angular', '@clr/icons', '@clr/ui'];

console.log(`\nVerify that all packages are at the latest version and could be installed from NPM Registry.\n`);

Promise.all(
  packages.map(package => {
    const pkg = `${package}@${packageJson.version}`;

    return new Promise((resolve, reject) => {
      const npm = spawn('npm', ['install', `${pkg}`, '--dry-run']);

      console.log(`\tChecking ${pkg} ...`);

      npm.on('close', code => {
        if (code !== 0) {
          reject([pkg, 'npm install failed']);
        } else {
          resolve([pkg, 'npm install succeeded']);
        }
      });
    });
  })
)
  .then(result => {
    console.log(`\n`);
    result.forEach(res => {
      console.log(`\tOK : ${res[0]}`);
    });
    console.log('\n✅ Verification successful.');
  })
  .catch(error => {
    if (error && Array.isArray(error)) {
      console.log('\n\nOne or more packages failed verification.\n');
      console.log(`\tPackage: ${error[0]} was not found into NPM Registry`);
    }
    console.log('\n❌ Verification failed.');
    process.exit(1);
  })
  .then(() => {
    process.exit(0);
  });
