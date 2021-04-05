# Backend

## Leaning Topics

1. [Modules](#modules)

<a name="modules"></a>
### Modules

<details>
<summary>Local Modules</summary>
যে সকল modules আমরা নিজেরা তৈরি করে থাকি সে সকল modules কে local modules বলা হয়।

```javascript
নিজেরা modules তৈরি করলে সেটা নিম্নক্তভাবে করতে হবে... 
const getName = () => 'Md Abdullah Fardus'; (এখানে ES6 এর ফাংশন ব্যবহার করা হয়েছে)
const getDOB = () => '08/08/1993';

exports.name = getName; (তৈরি করা ফাংশন exports করতে হবে ব্যবহার করার জন্য)
exports.age = getDOB; (exports. এর পরে যেকোনো নাম দেয়া যাবে)
(উপরোক্ত পদ্ধতিতে exports করার সুবিধা হলো এটাকে পছন্দ অনুযায়ী নামে exports করা যায়)

এই তৈরি কৃত modules ব্যবহার করার পদ্ধতি যথাক্রমে... 
const author = require('./Local_modules'); (যেকোনো নাম দিয়ে সেটাকে require করে নিতে হবে এবং file path বলে দিতে হবে)

console.log(author.name());
console.log(author.age());
(চেক করার জন্য terminal এ node index.js/অথবা যে ফাইলে রাখা হবে সেই ফাইলের নাম লিখে enter করলেই result দেখাবে)

অন্য আরেকটি উপায়ে export এবং import করা যায়, তা যথাক্রমে... 
exports.presentAddress = () => 'Sufia Vila/1st Floor/B3, Puratan Controlmore, North Patenga, Chattogram-4222';
(আলাদা করে লেখা এড়িয়ে যেতে চাইলে এই পদ্ধতিটি ব্যবহার করা যেতে পারে)
const {presentAddress} = require('./Local_modules');
(এখানে পছন্দ অনুযায়ী নাম দেয়া যায় না, যেমন্টা modules এর নাম দেয়া হয় ঠিক সেভাবেই লিখতে হয় এবং সেটা দ্বিতীয় বন্ধনীর ভেতরে)

আরো একটি export এবং import এর উপায় যথাক্রমে...
const fatherName = 'Md Olliullah Anshari'; (চাইলে variable ও ব্যবহার করা যায়)
const motherName = 'Jannatul Fardus';

module.exports = {
    fatherName,
    motherName
}
(modules.export কথাটি লিখে = সমান চিহ্ন দিয়ে দ্বিতীয় বন্ধনীর মধ্যে variable এর নাম দেয়া যায়,
তবে এক্ষেত্রেও নিজের ইচ্ছেমত নতুন নাম দেয়া যায় না export এর ক্ষেত্রে,
আপনি চাইলে এই পদ্ধতিতে ফাংশনও export করতে পারবেন)

const author = require('./Local_modules'); (require এর মাধ্যমে import করে নিতে হবে)
console.log(author.fatherName);
console.log(author.motherName);
```

    
</details>
<details>
<summary>Built in Modules</summary>
যে সকল modules পূর্বে থেকেই nodejs এর মধ্যে তৈরি করা রয়েছে সে সকল modules কে build in modules বলে। যেমন -

 - fs (ফাইল সিস্টেম হ্যান্ডেল করতে ব্যবহৃত হয়)
 - http (http server তৈরি করতে ব্যবহৃত হয়)
 - https (https server তৈরি করতে ব্যবহৃত হয়)
 - path (ফাইলের পাথ হ্যান্ডেল করতে ব্যবহৃত হয়)
 - url (url string parse করতে ব্যবহৃত হয়)
 - util (utility functions ব্যবহার করতে ব্যবহৃত হয়)
  


<details>
    <summary>File System (fs)</summary>
fs module ব্যবহার করার পূর্বে এটাকে যেকোনো নামে require করে নিতে হবে 

```javascript
const fs = require('fs');
```
fs module এ নিম্নোক্ত functions/methods সমূহ রয়েছে - 

- writeFile (এর সাহায্যে নতুন কোনো ফাইল তৈরি করা যায়)
```javascript
fs.writeFile('demo.txt','This is demo text',(err)=>{
       return (err ? console.log('err') : console.log('successful'))
    })
(আমরা demo নামে একটি text file তৈরি করার জন্য উপরোক্ত কোডটি ব্যবহার করেছি। 
প্রথম বন্ধনীর ভেতরে আমরা প্রহমে যে ফাইলটি তৈরি করতে চাই তার নাম extension সহ লিখেছি অর্থাৎ demo.txt
তারপর ফাইলের ভেতরে আমরা কিছু text লিখে দিয়েছি এবং
সর্বশেষে আমরা একটা call back ফাংশন দিয়েছি।
এখানে ফাংশনের ভেতরে আমরা একটি প্যারামিটার পাছ করেছি err নামে।
এরপর আমরা একটি টার্নারী কন্ডিশন ব্যবহার করেছি, অর্থাৎ ফাংশনের মধ্যে থাকা প্যারামিটার 
err হলে err লেখা console এ প্রিন্ট হবে, আর err না হলে console এ successful প্রিন্ট হবে।)
```
- appendFile (এর সাহায্যে কোনো ফাইল আপডেট করা যায়) 
```javascript
fs.appendFile('demo.txt','This text is included by appendFile method.',(err)=>{
       return (err ? console.log('err') : console.log('successful'))
    })
(এই পদ্ধতিতে আমরা যে ফাইলের ডাটা আপডেট করতে চাইছি সেই ফাইলের নাম extension সহ লিখে,
তারপর ডাটা লিখেছি এবং শেষে একটি কল বেক ফাংশন দিয়েছি, যাতে করে বুঝতে পারা যায় ফাইল
আপডেট ঠিক মতো হয়েছে কি না)
```
- readFile (এর সাহায্যে কোনো ফাইল রিড করা যায়)
```javascript
 fs.readFile('demo.txt','utf-8',(err, data)=>{
       return (err ? console.log('err') : console.log(data))
    })
(এই পদ্ধতিতে কোনো ফাইলের ডাটা রিড করার জন্য প্রথমে ফাইলের নামটি দিতে হবে extension সহ,
তারপর এনকোড হিসেবে utf-8 দিতে হবে। এই utf-8 না দিলে ফাইল রিডিং এর পরিবর্তে buffer দেখাবে।
তারপর কল বেক ফাংশনে দুটি প্যারামিটার দিয়ে দিতে হবে, একটি হলো err এবং অন্যটি হলো data)
```
- renameFile (এর সাহায্যে কোনো ফাইলের নাম পরিবর্তন করা যায়)
```javascript
fs.rename('demo.txt demo2.text','demo2.txt',(err)=>{
       return (err ? console.log('err') : console.log('successful'))
    })
(এই পদ্ধতিতে যে ফাইলের নাম পরিবর্তন করা হবে সেই ফাইলের নাম প্রথমে extension সহ লিখতে হবে
তারপর যে নতুন নামকরণ করতে চান সে নামটি লিখে দিতে হবে এবং শেষে কল বেক ফাংশনের মধ্যে একটি
প্যারামিটার পাছ করে err অথবা successful message console এ প্রিন্ট কমান্ড দিতে পারেন)
```
- unlink (এর সাহায্যে কোনো ফাইল ডিলিট করা যায়)
```javascript
fs.unlink('demo.txt,kk.txt',(err)=>{
       return (err ? console.log('err') : console.log('successful'))
    })
(এই পদ্ধতিতে শুধু যে ফাইলটি ডিলিট করা হবে তার নাম extension সহ দিয়ে একটি কল বেক ফাংশনে
একটি প্যারামিটার পাছ করে err অথবা successfull message প্রিন্ট করতে পারেন)
```
- exists (এর সাহায্যে কোনো ফাইল খোজা যায়)
```javascript
fs.exists('demo.txt',(result)=>{
       return (result ? console.log('found') : console.log('not found'))
    })
(এই পদ্ধতিতে যে ফাইলের খোজ করা হবে তার নাম extension সহ লিখে তারপর একটি কল বেক ফাংশনে
একটি প্যারামিটার পাছ করে দিয়ে আপনি চাইলে তার মাধ্যমে found অথবা not found প্রিন্ট করাতে পারেন
টার্নারি কন্ডিশনাল অপারেটর ব্যবহারের মাধ্যমে)
```
</details>
<details>
<summary>http</summary>
http module ব্যবহার করার পূর্বে এটাকে import/require করে নিতে হবে

```javascript
    const http = require('http');
```
http এর অন্তর্ভুক্ত modules সমূহ নিম্নোক্ত উপায়ে ব্যবহার করা যায়... 
- createServer (সার্ভার তৈরি করার জন্য ব্যবহার করা হয়)
```javascript
const port = 3000; (সার্ভারের যেকোনো একটি পোর্ট নাম্বার দিয়ে দিতে যাতে সার্ভার রান করে। এখানে 3000 এর স্থলে যেকোনো সংখ্যা চাইলে ব্যবহার করতে পারবেন)
const hostName = '0.0.0.0'; (একটি হোস্ট নাম প্রদান করতে হবে। আপনি চাইলে হোস্ট নাম হিসেবে 127.0.0.1 ব্যবহার করতে পারেন।)

http.createServer((req, res)=>{
        res.end('<h1>Hello! I am your First server...</h1>')
    }).listen(port, hostName,()=> console.log(`server is running successfully at http://${hostName}:${port}`));
    
(একটি সার্ভার তৈরিতে দুটি প্যারামিটার দিয়ে দিতে হয়। একটি request এবং অন্যটি হলো
response. এখানে response এ সেটাই দেখানো হবে যেটা আপনি লিখে দিবেন। আমরা 
res.end method ব্যবহার করেছি response হিসেবে। আপনি চাইলে res.send ব্যবহার
করতে পারেন। অন্যদিকে সার্ভার সঠিকভাবে চালু হয়েছে তা বোঝার জন্য আমরা এর শেষে কল বেক হিসেবে .listen ব্যবহার করেছি। যেখানে আমরা port এবং hostName 
দুটো প্যারমিটার পাছ করেছি সেই সাথে কল বেক হিসেবে console.log এর ভেতরে ম্যাসেজ দিয়ে দিয়েছি।
আর এই সকল কাজ করতে আমরা ES6 এর লিটারালাল বেক টিক ব্যবহার করেছি।)
```
</details>
</details>
