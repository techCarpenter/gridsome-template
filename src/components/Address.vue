<template>
  <div class="address-block">
      <p><strong>Address:</strong></p>
      <p>{{$static.json.address.address1}}</p>
      <p>{{$static.json.address.address2}}</p>
  </div>
</template>

<static-query>
query {
  json (id: "0") {
    address {
      address1
      address2
    }
  }
}
</static-query>
