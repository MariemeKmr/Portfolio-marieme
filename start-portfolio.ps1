Write-Host "Lancement du Portfolio Marieme Kamara..." -ForegroundColor Cyan

$root     = $PSScriptRoot
$backend  = Join-Path $root "backend"
$frontend  = Join-Path $root "frontend"
$venvPy   = Join-Path $backend ".venv\Scripts\python.exe"

# --- Backend (force the venv's Python) ---
Start-Process powershell `
  -ArgumentList "cd `"$backend`"; `"$venvPy`" -m uvicorn app.main:app --reload" `
  -WindowStyle Minimized

# --- Frontend ---
Start-Process powershell `
  -ArgumentList "cd `"$frontend`"; npm run dev" `
  -WindowStyle Minimized

Write-Host "Le Portfolio est en cours d'execution !" -ForegroundColor Green
