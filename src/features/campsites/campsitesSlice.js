import  {CAMPSITES }  from  "/Users/nanitosse/Desktop/bootcamp/nucampsite/src/app/shared/CAMPSITES.js";


export const selectAllCampsites = ()=>{
    return CAMPSITES;
};


export  const selectRandomCampsite = ()=>{
    
        return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
    
}

