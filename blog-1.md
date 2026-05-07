Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.?


TypeScript এর মূল উদ্দেশ্য হলো টাইপ সেফটি নিশ্চিত করা যাতে রানটাইম এরর কমে যায়। কিন্তু any টাইপ এই সেফটি সিস্টেমকে ভেঙে দেয় এজন্য একে বলা হয় type safety hole। অন্যদিকে unknown টাইপ বেশি নিরাপদ কারণ এটি ব্যবহার করার আগে অবশ্যই টাইপ চেক করতে হয়। 

any টাইপ দিলে TypeScript আর কোনো টাইপ চেক করে না ফলে ভুল অপারেশন করলেও error দেখায় না
unknown টাইপ ব্যবহার করলে সরাসরি কোনো অপারেশন করা যায় না।
Type narrowing হলো একটি general টাইপকে ধীরে ধীরে specific টাইপে রূপান্তর করে 

