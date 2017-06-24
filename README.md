[REST API spec](swagger.io) à importer avec [Swagger Editor](http://editor.swagger.io/)

## DB Schema

### Users table

| Name | Type |
| ---- | ---- |
| id | int |
| firstName | string |
| lastName | string |
| login | string |
| password | string |
| phone | string |
| email | string |
| address | string |
| cityId | int |
| status | enum: [admin, candidate, instructor] |

### Cities

| Name | Type |
| ---- | ---- |
| id | int |
| name | string |
| lat | float |
| lon | float |


### TimeSlots

| Name | Type |
| ---- | ---- |
| id | int |
| startDate | string |
| endDate | string
| cityId | int |
| instructorId | int |

### BookedTimeSlots

| Name | Type |
| ---- | ---- |
| id | int |
| startDate | string |
| endDate | string |
| cityId | int |
| startLocationId | string |
| candidateId | int |
| instructorId | int |
