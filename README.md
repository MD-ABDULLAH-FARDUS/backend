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
এখানে ফাংশনের ভেতরে আমরা একটি প্যারামিটার পাছ করেছি নামে err নামে।
এরপর আমরা একটি টার্নারী কন্ডিশন ব্যবহার করেছি, অর্থাৎ ফাংশনের মধ্যে থাকা প্যারামিটার 
err হলে err লেখা console এ প্রিন্ট হবে, আর err না হলে console এ successful প্রিন্ট হবে।)
```
- appendFile (এর সাহায্যে কোনো ফাইল আপডেট করা যায়) 
```javascript
```
- readFile (এর সাহায্যে কোনো ফাইল রিড করা যায়)
```javascript
```
- renameFile (এর সাহায্যে কোনো ফাইলের নাম পরিবর্তন করা যায়)
```javascript
```
- unlink (এর সাহায্যে কোনো ফাইল ডিলিট করা যায়)
```javascript
```
- exists (এর সাহায্যে কোনো ফাইল খোজা যায়)
```javascript
```
</details>
</details>
