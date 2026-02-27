Write-Host "🧹 Cleaning React Native project..."

# Remove node_modules
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# Remove Android build artifacts
Remove-Item -Recurse -Force android\.gradle -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force android\app\build -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force android\build -ErrorAction SilentlyContinue

# Remove iOS build artifacts
Remove-Item -Recurse -Force ios\Pods -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force ios\build -ErrorAction SilentlyContinue

# Remove miscellaneous caches
Remove-Item -Recurse -Force .gradle -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .expo -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .expo-shared -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .metro-cache -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .bundle -ErrorAction SilentlyContinue
Remove-Item yarn.lock -ErrorAction SilentlyContinue
Remove-Item package-lock.json -ErrorAction SilentlyContinue

Write-Host "✅ Project cleaned! You can now zip without huge size."
