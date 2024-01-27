'use server'

import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapAcademicSite() {
    try {
        const response = await axios.get('https://www.academics.mnnit.ac.in/new');

        const $ = cheerio.load(response.data);

        const notification = $(".panel-title .row a > .col-md-8").map(function() {
            return $(this).text();
        }).get();

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
        const response = await axios.get('http://www.mnnit.ac.in/index.php/notice-board');
        
        // Parse the HTML using Cheerio
        const $ = cheerio.load(response.data);
        
        const notification = $('.item-page li strong').map(function() {
            return $(this).text();
        }).get();

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
        const response = await axios.get('http://www.mnnit.ac.in');
        
        // Parse the HTML using Cheerio
        const $ = cheerio.load(response.data);
        
        const notification = $(".moduletable .popup p").map(function() {
            return $(this).text();
        }).get();

        const data = {
            notifications: notification,
        }

        return data;
    } catch (error) {
        console.log(error);
    }
}
