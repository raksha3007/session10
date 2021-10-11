function Counter() {
    const [count, setCount] = useState(0);
  
    const prevCountRef = useRef();
    useEffect(() => {
      prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;
  
    return <h1>Now: {count}, before: {prevCount}</h1>;
  }