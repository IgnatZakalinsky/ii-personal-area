import {PlaylistsAPI} from "./PlaylistsAPI";

export const LogPr = (pr: Promise<any>) => {
    return pr
        .then(data => console.log(data))
        .catch(e => console.log(!e.response
            ? [e.message, {...e}]
            : e.response.data
        ))
}

export const postTest = async () => {
    const time = new Date().getTime()

    // console.log('PlaylistsAPI.add(undefined): ')
    // await LogPr(PlaylistsAPI.add(undefined))
    //
    // console.log('PlaylistsAPI.add({playlist: {}}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: 1}}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: 1}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: ""}}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: ''}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: undefined}}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: undefined}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: null}}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: null}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: {}}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: {}}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString()}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString()}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: undefined}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: undefined}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: null}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: null}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: "number"}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 'number'}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: {}}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: {}}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: undefined}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: undefined}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: null}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: null}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: "number"}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: 'number'}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: 1000000}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: 1000000}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: {}}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: {}}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: []}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: []}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: ["string"]]}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: ['string']}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: ["number"]]}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: ['number']}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: [undefined]]}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: [undefined]}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: [1]]}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: [1]}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: [{}]]}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: [{}]}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: [""]]}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: [""]}}))
    //
    // console.log('PlaylistsAPI.add({playlist: {name: Math.random().toString(), tags: ["x", 1]]}): ')
    // await LogPr(PlaylistsAPI.add({playlist: {name: Math.random().toString(), levelAccess: 1000000, tags: ["x", 1]}}))



    console.log('time: ', new Date().getTime() - time)
}
