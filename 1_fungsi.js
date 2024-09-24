function Car({manufacture, type, color}){
    return {
        manufacture,
        type,
        color,
        unitCode:`${+new Date()}-${manufacture}-${type}-${color}`,
    }
}
