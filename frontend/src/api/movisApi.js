export const fetchMovies = async ()=>{
    const res = await fetch("http://localhost:8000/movies")
    if (!res.ok) {
        throw new Error("error fetch id not good");
    }
    return res.json()
}
