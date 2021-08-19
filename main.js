import './style.scss'

import {makeHeadlines} from './headliners.js';
import {makeFirstPage} from './firstpage.js';
import { makeSecondPage } from './secondpage';
import { makeThirdPage } from './thirdpage';
import json from './data.json';


const  title =  document.getElementById("title");
makeHeadlines(title,json.homepage.headline);

const  first =  document.getElementById("first");
makeFirstPage(first,json.firstpage.datafirst);

const  second =  document.getElementById("second");
makeSecondPage(second,json.secondpage.datasecond);

const  third =  document.getElementById("third");
makeThirdPage(third,json.thirdpage.datathird);



