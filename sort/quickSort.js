const swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function partition2(arr, start, end) {
    // 选择第一个元素作为分割元素
    let i = start
    let j = end + 1
    do {
        do {
            i++
        } while (arr[i] < arr[start])
        do {
            j--
        } while (arr[j] > arr[start])
        if (i < j) {
            swap(arr, i, j)
        }
    } while (i < j)
    swap(arr, start, j)
    return j
}

function partition(arr, start, end) {
    // 选择第一个元素作为分割元素
    // 将分割元素放在数组的最后一个位置
    swap(arr, start, end)

    let small = start - 1
    for (let index = start; index < end; index++) {
        if (arr[index] < arr[end]) {
            small++
            if (small !== index) {
                swap(arr, small, index)
            }
        }
    }
    small++
    swap(arr, small, end)

    return small
}

function quikeSort(arr, start, end) {
    if (start >= end) return
    const index = partition(arr, start, end)
    if (index > start) quikeSort(arr, start, index - 1)
    if (index < end) quikeSort(arr, index + 1, end)
}

// test

function test(arr) {
    quikeSort(arr, 0, arr.length - 1)
    console.log(arr)
}

test([2, 3, 88, 3, 122, 3, 90, 1, 2, 3, 4])
test([9, 2, 13, 4, 4, 6, 73, 23, 1, 32])
test([9, 9, 9, 9, 9])
test([9])
