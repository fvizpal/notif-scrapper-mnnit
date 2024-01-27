'use server'

import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

export async function scrapAcademicSite() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto("https://www.academics.mnnit.ac.in/new");
        const html = await page.content();

        const $ = cheerio.load(html);

        const notification = $(".panel-title .row a > .col-md-8").map(function() {
            return $(this).text();
        }).get();

        await browser.close();
        const data = {
            notifications: notification,
        }

        return data;
    } catch (error) {
        console.log(error);
    }
};

export async function scrapDSWSite() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto("http://www.mnnit.ac.in/index.php/notice-board");
        const html = await page.content();

        const $ = cheerio.load(html);
        
        const notification = $('[itemprop="articlebody"] > ol > li').map(function() {
            return $(this).text();
        }).get();

        console.log(notification);

        await browser.close();
        const data = {
            notifications: notification,
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function scrapHomeSite() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto("http://www.mnnit.ac.in/");
        const html = await page.content();

        const $ = cheerio.load(html);
        
        const notification = $(".moduletable .popup p").map(function() {
            return $(this).text();
        }).get();

        await browser.close();
        const data = {
            notifications: notification,
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}
