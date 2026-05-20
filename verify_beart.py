import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            viewport={'width': 1280, 'height': 800},
            device_scale_factor=2,
        )
        page = await context.new_page()

        # Go to the local dev server
        await page.goto('http://localhost:5173')

        # Wait for content to load
        await page.wait_for_selector('nav')
        await page.wait_for_selector('h1')

        # Create screenshots directory
        os.makedirs('verification/screenshots', exist_ok=True)

        # Take full page screenshot
        await page.screenshot(path='verification/screenshots/verification_v2.png', full_page=True)

        # Test Category Filter
        print("Testing Category Filter...")
        # Click the "Art" filter
        await page.click('button:has-text("Art")')
        await asyncio.sleep(1) # Wait for filter animation
        await page.screenshot(path='verification/screenshots/filter_art.png')

        # Test Mobile Menu
        print("Testing Mobile Menu...")
        await page.set_viewport_size({"width": 375, "height": 812})
        await page.click('button[aria-label="Toggle Menu"]')
        await asyncio.sleep(1) # Wait for animation
        await page.screenshot(path='verification/screenshots/mobile_menu.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(verify())
