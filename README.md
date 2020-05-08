# RESTy Context

# --------------------

## Requirements
* Match the design and overall functionality
  * Input field for entering a URL
  * Radio Buttons for method (GET/PUT/POST/DELETE)
  * Input field for typing in JSON for POST/PUT
* Full Testing and Documentation are required.

## Stretch Goals
* Use authenticated APIs by sending either Basic or Bearer Auth, when specified
  * Username+Password entry for Basic Auth
  * Token entry for Bearer Auth
* Save History in local storage
  * When choosing from history, pre-fill the form

# --------------------

## components
- [X] - App
- [X] - Form
- [X] - Display
- [X] - History
- [X] - Header
- [] - Auth?

## hooks/containers
- [] - FormProvider

## services
- [X] - api (fetch(url, object with headers, body))
  * [X] - fetchResponse

# --------------------

## API


## Steps
- Initial Form
- FormProvider
- fetchResponse
- Display
- History
- Header
- localStorage
- No duplicates
- Click to load

- Auth (Dropdown?)
- handlers in Provider?
- Styling
- Hook Testing
- Service Testing