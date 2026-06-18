const url = 'https://t7of4wxu.api.sanity.io/v2024-06-15/data/query/production?query=*[_type == "homepage"]';
fetch(url, {
  headers: {
    Authorization: 'Bearer skW6oPrN41YyLGmzYvk8G4Nhk9MQOJaQGlEmXaB6E0ZFMztibGv8osJNfTVJiwgnZJcJN21MFQ6wvYsXHmK2i2BrnQnYKIFc8V66ZoLD5jLIZmyikVHiSlOJdZj83xLCVVDjy4EmL3EZlCQVQAwbD65qffyo26dxDTNSC7KcxbPMXbTgVWTQ'
  }
})
.then(res => res.json())
.then(json => console.log(JSON.stringify(json, null, 2)))
.catch(console.error);
