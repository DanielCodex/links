# add this links later

```js
<Link link="https://www.producthunt.com/@danial_hemmati">
    <FaProductHunt className="mr-2 mt-[2px] text-2xl text-[#da552f]" />{" "}
    <Span>Instagram</Span>
</Link>,
  <Link link="https://dev.to/danielcodex">
    <FaDev className="mr-2 mt-[2px] text-2xl text-white" /> <Span>dev.to</Span>
  </Link>,
  <Link link="https://hashnode.com/@DanielCodex">
    <SiHashnode className="mr-2 mt-[2px] text-2xl text-blue-400" />{" "}
    <Span>Hashnode</Span>
  </Link>, 
```

```js
      <motion.ol
        variants={container}
        initial="hidden"
        animate="show"
        className="text-white"
      >
        {/* <List>something really cool</List>
        <List>anotehr coold stuff</List>
        <List>daniel hemmati</List> */}
        <motion.li
          variants={item}
          initial="hidden"
          animate="show"
          className="border-4 border-indigo-400 p-5 text-4xl m-4"
        >
          daniel hemati
        </motion.li>
        <motion.li
          variants={item}
          initial="hidden"
          animate="show"
          className="border-4 border-indigo-400 p-5 text-4xl m-4"
        >
          geohot
        </motion.li>
        <motion.li
          variants={item}
          animate="show"
          initial="hidden"
          className="border-4 border-indigo-400 p-5 text-4xl m-4"
        >
          deepmind
        </motion.li>
      </motion.ol>
```