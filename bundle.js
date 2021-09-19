const { Client } = require("@notionhq/client")
require('dotenv').config()

const NOTION_DATABASE_ID = '81a17757cdbc4f84a83d399fa76d7230'

const databaseId = process.env.NOTION_DATABASE_ID
// Initializing a client
const notion = new Client({ auth: process.env.NOTION_API_TOKEN })

const getDatabase = async () => {
    const response = await notion.databases.query({ database_id: NOTION_DATABASE_ID });
  
    console.log(response);
  };
  
getDatabase();
