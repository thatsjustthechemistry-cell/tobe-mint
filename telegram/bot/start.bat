@echo off
REM Double-click to start the TOBESTABLE Telegram bot.
REM Reads the token + NETWORK from .env in this folder.
REM Keep this window open while you want the bot online. Close it to stop the bot.
REM Run only ONE copy at a time (two pollers cause a Telegram 409 Conflict).
cd /d "%~dp0"
echo Starting TOBESTABLE bot... (close this window to stop)
node bot.js
echo.
echo Bot stopped. Press any key to close.
pause >nul
