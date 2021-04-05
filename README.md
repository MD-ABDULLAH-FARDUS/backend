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
</details>
