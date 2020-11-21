def encode_labels(labels):
    labels=labels.replace({"male":0})
    labels=labels.replace({"female":1})
    return labels
