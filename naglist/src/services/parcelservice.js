export function saveParcelEntry(entry) {

  console.log("Saving parcel:", entry)

  localStorage.setItem(
    "lastParcel",
    JSON.stringify(entry)
  )

}