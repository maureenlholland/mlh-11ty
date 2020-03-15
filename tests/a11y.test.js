const puppeteer = require("puppeteer");
const axeCore = require("axe-core");

let results;
const getHelp = (response, type) => {
  return response.violations.filter(v => v.impact === type).map(v => v.help);
};

describe("MLH", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:8080/");
    try {
      // Inject and run axe-core
      const handle = await page.evaluateHandle(`
            ${axeCore.source}
            axe.run()
        `);

      // Get the results from `axe.run()`.
      results = await handle.jsonValue();
      // Destroy the handle & return axe results.
      await handle.dispose();
    } catch (err) {
      console.log(err);
    }
  });

  it("should have no critical a11y violations", async () => {
    return await expect(getHelp(results, "critical")).toHaveLength(0);
  });
  it("should have no serious a11y violations", async () => {
    return await expect(getHelp(results, "serious")).toHaveLength(0);
  });
  it("should have no moderate a11y violations", async () => {
    return await expect(getHelp(results, "moderate")).toHaveLength(0);
  });
});
