
# HL7 v2 to JSON Converter

A free, browser-based HL7 v2.x to JSON converter by **SmaRTy Saini Corp**.

## Features

- Paste HL7 v2.x messages
- Converts into clean JSON format
- Works entirely in-browser (no server or data sent)
- Ideal for testing and integrations

## Example

### Input:
```
MSH|^~\&|LAB|123|EMR|456|202501011230||ORM^O01|12345|P|2.3
PID|||123456^^^MR||DOE^JOHN||19800101|M
```

### Output:
```json
[
  {
    "segment": "MSH",
    "fields": ["^~\\&", "LAB", "123", "EMR", "456", "202501011230", "", "ORM^O01", "12345", "P", "2.3"]
  },
  {
    "segment": "PID",
    "fields": ["", "", "123456^^^MR", "", "DOE^JOHN", "", "19800101", "M"]
  }
]
```

---

Developed by **SmaRTy Saini Corp**
