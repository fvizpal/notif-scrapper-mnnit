import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

export async function scrapMnnitSite() {
    // if (!url) return;

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto("https://www.academics.mnnit.ac.in/new");
        const html = await page.content();

        const $ = cheerio.load(html);

        const banner = $(".banner-text").text();

        console.log(banner);

        await browser.close();
    } catch (error) {
        console.log(error);
    }
}

scrapMnnitSite();
