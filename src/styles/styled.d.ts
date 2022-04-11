import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        border: {
            size: {
                none: {
                    value: string
                    attributes: { category: string; type: string }
                }
                hairline: {
                    value: string
                    attributes: { category: string; type: string }
                }
                thin: {
                    value: string
                    attributes: { category: string; type: string }
                }
                thick: {
                    value: string
                    attributes: { category: string; type: string }
                }
                heavy: {
                    value: string
                    attributes: { category: string; type: string }
                }
            }

            radius: {
                size: {
                    none: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    sm: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    md: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    lg: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    pill: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    circular: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                }
            }
        }

        color: {
            brand: {
                primary: {
                    '1': {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    '2': {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    '3': {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    '4': {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    '5': {
                        value: string
                        attributes: { category: string; type: string }
                    }
                }
            }

            neutral: {
                '1': {
                    value: string
                    attributes: { category: string; type: string }
                }
                '2': {
                    value: string
                    attributes: { category: string; type: string }
                }
                '3': {
                    value: string
                    attributes: { category: string; type: string }
                }
                '4': {
                    value: string
                    attributes: { category: string; type: string }
                }
                '5': {
                    value: string
                    attributes: { category: string; type: string }
                }
            }
        }

        font: {
            size: {
                xxxs: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xxs: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xs: {
                    value: string
                    attributes: { category: string; type: string }
                }
                sm: {
                    value: string
                    attributes: { category: string; type: string }
                }
                md: {
                    value: string
                    attributes: { category: string; type: string }
                }
                lg: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xl: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xxl: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xxxl: {
                    value: string
                    attributes: { category: string; type: string }
                }
                display: {
                    value: string
                    attributes: { category: string; type: string }
                }
                giant: {
                    value: string
                    attributes: { category: string; type: string }
                }
            }

            family: {
                highlight: {
                    value: string
                    attributes: { category: string; type: string }
                }
            }

            weight: {
                bold: {
                    value: string
                    attributes: { category: string; type: string }
                }
                medium: {
                    value: string
                    attributes: { category: string; type: string }
                }
                regular: {
                    value: string
                    attributes: { category: string; type: string }
                }
            }
        }

        line: {
            height: {
                tight: {
                    value: string
                    attributes: { category: string; type: string }
                }
                medium: {
                    value: string
                    attributes: { category: string; type: string }
                }
                distant: {
                    value: string
                    attributes: { category: string; type: string }
                }
                superdistant: {
                    value: string
                    attributes: { category: string; type: string }
                }
            }
        }

        opacity: {
            level: {
                semiopaque: {
                    value: string
                    attributes: { category: string; type: string }
                }
                intense: {
                    value: string
                    attributes: { category: string; type: string }
                }
                medium: {
                    value: string
                    attributes: { category: string; type: string }
                }
                light: {
                    value: string
                    attributes: { category: string; type: string }
                }
                semitransparent: {
                    value: string
                    attributes: { category: string; type: string }
                }
            }
        }

        shadow: {
            level: {
                '1': {
                    x: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    y: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    b: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    stack: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                }
                '2': {
                    x: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    y: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    b: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    stack: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                }
                '3': {
                    x: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    y: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    b: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    stack: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                }
                '4': {
                    x: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    y: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    b: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                    stack: {
                        value: string
                        attributes: { category: string; type: string }
                    }
                }
            }
        }

        spacing: {
            size: {
                quarck: {
                    value: string
                    attributes: { category: string; type: string }
                }
                nano: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xxxs: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xxs: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xs: {
                    value: string
                    attributes: { category: string; type: string }
                }
                sm: {
                    value: string
                    attributes: { category: string; type: string }
                }
                md: {
                    value: string
                    attributes: { category: string; type: string }
                }
                lg: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xl: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xxl: {
                    value: string
                    attributes: { category: string; type: string }
                }
                xxxl: {
                    value: string
                    attributes: { category: string; type: string }
                }
                huge: {
                    value: string
                    attributes: { category: string; type: string }
                }
                giant: {
                    value: string
                    attributes: { category: string; type: string }
                }
            }

            squish: {
                size: {
                    quarck: {
                        v: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                        h: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                        stack: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                    }
                    nano: {
                        v: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                        h: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                        stack: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                    }
                    xs: {
                        v: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                        h: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                        stack: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                    }
                    sm: {
                        v: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                        h: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                        stack: {
                            value: string
                            attributes: { category: string; type: string }
                        }
                    }
                }
            }
        }
    }
}
