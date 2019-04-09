export const testData = {
    'id': 'daily_metrics2',
    'label': 'Test Table metrics',
    'title': 'Diksha Usage Report',
    'description': 'Reports related to content download, duration of content played and number of sessions across mobile App and Portal.',
    'dataSource': '/reports/sunbird/daily_metrics.json',
    'charts': [
      {
        'datasets': [
          {
            'dataExpr': 'data[\'Total QR scans\']',
            'label': 'Total QR Scans'
          }
        ],
        'colors': [
          {
            'borderColor': 'rgb(1, 184, 170)',
            'backgroundColor': 'rgba(1, 184, 170, 0.2)'
          }
        ],
        'labelsExpr': 'data.Date',
        'chartType': 'line',
        'options': {
          'scales': {
            'yAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Total Scans'
                }
              }
            ],
            'xAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Date'
                }
              }
            ]
          },
          'tooltips': {
            'intersect': false,
            'mode': 'x-axis',
            'titleSpacing': 5,
            'bodySpacing': 5
          },
          'title': {
            'fontSize': 16,
            'display': true,
            'text': 'Total QR Code Scans'
          },
          'legend': {
            'display': false
          },
          'responsive': true
        }
      },
      {
        'datasets': [
          {
            'dataExpr': 'data[\'Percentage (%) of Failed QR Scans\']',
            'label': '% Failed QR Code Scans'
          }
        ],
        'colors': [
          {
            'borderColor': 'rgb(55, 70, 73)',
            'backgroundColor': 'rgba(55, 70, 73, 0.2)'
          }
        ],
        'labelsExpr': 'data.Date',
        'chartType': 'line',
        'options': {
          'scales': {
            'yAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Percentage (%)'
                }
              }
            ],
            'xAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Date'
                }
              }
            ]
          },
          'tooltips': {
            'intersect': false,
            'mode': 'x-axis',
            'titleSpacing': 5,
            'bodySpacing': 5
          },
          'title': {
            'fontSize': 16,
            'display': true,
            'text': '% Failed QR Code Scans'
          },
          'legend': {
            'display': false
          },
          'responsive': true
        }
      },
      {
        'datasets': [
          {
            'dataExpr': 'data[\'Total Content Downloads\']',
            'label': 'Total Content Downloads'
          }
        ],
        'colors': [
          {
            'borderColor': 'rgb(242, 203, 28)',
            'backgroundColor': 'rgba(242, 203, 28, 0.2)'
          }
        ],
        'labelsExpr': 'data.Date',
        'chartType': 'line',
        'options': {
          'scales': {
            'yAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Total Downloads'
                }
              }
            ],
            'xAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Date'
                }
              }
            ]
          },
          'tooltips': {
            'intersect': false,
            'mode': 'x-axis',
            'titleSpacing': 5,
            'bodySpacing': 5
          },
          'title': {
            'fontSize': 16,
            'display': true,
            'text': 'Total Content Downloads'
          },
          'legend': {
            'display': false
          },
          'responsive': true
        }
      },
      {
        'datasets': [
          {
            'dataExpr': 'data[\'Total Content Plays\']',
            'label': 'Total Content Plays'
          }
        ],
        'colors': [
          {
            'borderColor': 'rgb(1, 184, 170)',
            'backgroundColor': 'rgba(1, 184, 170, 0.2)'
          }
        ],
        'labelsExpr': 'data.Date',
        'chartType': 'line',
        'options': {
          'scales': {
            'yAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Total Plays'
                }
              }
            ],
            'xAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Date'
                }
              }
            ]
          },
          'tooltips': {
            'intersect': false,
            'mode': 'x-axis',
            'titleSpacing': 5,
            'bodySpacing': 5
          },
          'title': {
            'fontSize': 16,
            'display': true,
            'text': 'Total Content Plays(App + Portal)'
          },
          'legend': {
            'display': false
          },
          'responsive': true
        }
      },
      {
        'datasets': [
          {
            'dataExpr': 'data[\'Total Devices that played content on App\']',
            'label': 'Total Devices'
          }
        ],
        'colors': [
          {
            'borderColor': 'rgb(1, 184, 170)',
            'backgroundColor': 'rgba(1, 184, 170, 0.2)'
          }
        ],
        'labelsExpr': 'data.Date',
        'chartType': 'line',
        'options': {
          'scales': {
            'yAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Total Devices'
                }
              }
            ],
            'xAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Date'
                }
              }
            ]
          },
          'tooltips': {
            'intersect': false,
            'mode': 'x-axis',
            'titleSpacing': 5,
            'bodySpacing': 5
          },
          'title': {
            'fontSize': 16,
            'display': true,
            'text': 'Total Distinct Devices (App only)'
          },
          'legend': {
            'display': false
          },
          'responsive': true
        }
      },
      {
        'datasets': [
          {
            'dataExpr': 'data[\'Content Play Time on App (in hours)\']',
            'label': 'Total Hours of Content Played on App'
          },
          {
            'dataExpr': 'data[\'Content Play Time on Portal (in hours)\']',
            'label': 'Total Hours of Content Played on Portal'
          }
        ],
        'colors': [
          {
            'borderColor': 'rgb(242, 203, 28)',
            'backgroundColor': 'rgba(242, 203, 28, 0.2)'
          },
          {
            'borderColor': 'rgb(55, 70, 73)',
            'backgroundColor': 'rgba(55, 70, 73, 0.2)'
          }
        ],
        'labelsExpr': 'data.Date',
        'chartType': 'line',
        'options': {
          'scales': {
            'yAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Total Time (in hours)'
                }
              }
            ],
            'xAxes': [
              {
                'scaleLabel': {
                  'display': true,
                  'labelString': 'Date'
                }
              }
            ]
          },
          'tooltips': {
            'intersect': false,
            'mode': 'x-axis',
            'titleSpacing': 5,
            'bodySpacing': 5
          },
          'title': {
            'fontSize': 16,
            'display': true,
            'text': 'Total Hours of Content Played'
          },
          'responsive': true
        }
      }
    ],
    'table': [
      {
        'id': 'tab2',
        'name': 'Table 1',
        'columnsExpr': 'keys',
        'valuesExpr': 'tableData'
      },
      {
        'id': 'tab1',
        'name': 'Table 2',
        'columnsExpr': 'keys',
        'valuesExpr': 'tableData'
      }
    ],
    'downloadUrl': '/reports/sunbird/daily_metrics.csv'
  };
