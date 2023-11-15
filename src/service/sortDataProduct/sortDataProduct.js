
function sortDataProduct(keySort, dataSort) {
    console.log(keySort, dataSort)
    if (keySort == 'A-Z') {
        const data = [...dataSort].sort((a, b) => {
            return a.name.localeCompare(b.name)
        })

        return data;
    }

    if (keySort == 'Z-A') {
        const data = [...dataSort].sort((a, b) => {
            return b.name.localeCompare(a.name)
        })

        return data;
    }

    if (keySort == 'lowest') {
        const data = [...dataSort].sort((a, b) => {
            return a.price - b.price
        })

        return data;
    }

    if (keySort == 'highest') {
        const data = [...dataSort].sort((a, b) => {
            return b.price - a.price
        })
        return data;
    }

    return dataSort
}

export default sortDataProduct;