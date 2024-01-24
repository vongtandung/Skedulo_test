const unionNonOverlapItems = (items) => {
    const result = []
    const sortedProcessingList = (items || []).sort(
      (a, b) => a.startPx - b.startPx
    );
    if(!sortedProcessingList.length) {
      return result
    }
    let curPx = sortedProcessingList[0]
    for(let i = 1; i< sortedProcessingList.length; i++) {
      const nextPx = sortedProcessingList[i]
      if(curPx.endPx >= nextPx.startPx) {
        curPx.endPx = Math.max(curPx.endPx, nextPx.endPx)
      } else {
        result.push(curPx)
        curPx = nextPx
      }
    }
    result.push(curPx)
    return result;
  };

  const testData = [
    {
      startPx: 10,
      endPx: 20,
    },
    {
      startPx: 87,
      endPx: 95,
    },
    {
      startPx: 5,
      endPx: 25,
    },
    {
      startPx: 50,
      endPx: 85,
    },
    {
      startPx: 70,
      endPx: 80,
    },
    {
      startPx: 20,
      endPx: 30,
    },
    {
      startPx: 60,
      endPx: 80,
    },
    {
      startPx: 22,
      endPx: 25,
    },
    {
      startPx: 90,
      endPx: 97,
    },
    {
      startPx: 12,
      endPx: 20,
    },
    {
      startPx: 1,
      endPx: 3,
    },
    {
      startPx: 10,
      endPx: 30,
    },
  ];

  const result = unionNonOverlapItems(testData)