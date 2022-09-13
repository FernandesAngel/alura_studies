export function timeToSecs(time: string){
  const [h = '0', m = '0', s = '0'] = time.split(":");

  const hours = Number(h) * 3600
  const minutes = Number(m) * 60
  return hours + minutes + Number(s)
}

