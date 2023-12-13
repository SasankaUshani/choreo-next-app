// constants/productSpecs.ts
export const productSpecs = {
  Item: 'Anti-CD4 Antibody Picoband',
  Company: 'BosterBio',
  Price: 'Pricing Info',
  'Catalog Number': 'A00344-2',
  Quantity: '100 µg',
  Applications: 'WB,IHC,Flow Cytometry,ELISA',
  Concentration:
    'Add 0.2ml of distilled water will yield a concentration of 500ug/ml',
  Format:
    'Lyophilized, Each vial contains 4mg Trehalose, 0.9mg NaCl, 0.2mg Na2HPO4, 0.01mg NaN3',
  Purity: 'Immunogen affinity purified',
  Reactivity: 'Mouse,Rat',
  Isotype: 'IgG',
  Host: 'Rabbit',
  Immunogen: 'E.coli-derived rat CD4 recombinant protein (Position: K28-I457)',
  'NCBI Full Gene Name': 'Cd4 molecule',
  'NCBI Gene Aliases': 'W3/25, p55',
  Clonality: 'Polyclonal',
  Storage:
    'Store at -20˚C for one year from date of receipt. After reconstitution, at 4˚C for one month. It can also be aliquotted and stored frozen at -20˚C for six months. Avoid repeated freeze-thaw cycles',
} as const;

export const companyInfo = {
  companyName: 'BosterBio',
  phone: 'Phone: (888) 466-3604',
  location: '3942 B Valley Ave.Pleasanton, CA 94566 United States',
  imgSrc: 'https://media.biocompare.com/m/37/vendor/104918-187x140.jpg',
  fax: '(925)215-2184',
  email: 'support@bosterbio.com',
  website: 'www.bosterbio.com',
};

export const sampleReview = [
  {
    date: '4/9/2015',
    product: 'ZO-1/TJP1 Immunofluorescence',
    userName: 'Monica Valencia',
    reviewDescription:
      'In our laboratory we have to track airway epithelial cells throughout differentiation. Tight junction formation is among those steps.',
  },
  {
    date: '6/21/2017',
    product: 'ZO-1 Immunofluorescence Staining',
    userName: 'J L',
    reviewDescription:
      'The aim is to stain human gingival epithelial cells with this ZO-1 antibody using immunofluorescence staining. The result is good when using frozen section, but not paraffin embedded section.',
  },
  {
    date: '6/21/2017',
    product: 'Works Well to Detect CTLA-4 Expression',
    userName: 'Chirag Patel',
    reviewDescription:
      'As a cancer immunology lab, we study exhaustion in T cells within the tumor microenvironment. CTLA4 is a classic marker of exhaustion as it suppresses activation.',
  },
  {
    date: '6/21/2017',
    product: 'Works Well for Flow Cytometry!',
    userName: 'Dechao Cao',
    reviewDescription:
      'Use it to tell CD4 Naive cells, which is CD4+and CD45RA+ in both healthy and patient PBMCs, to compare the percentage between them.',
  },
];

export const sampleCitations = [
  {
    title:
      'A potential peptide vector that allows targeted delivery of a desired fusion protein into the human breast cancer cell line MDA-MB-231',
    subtitle: 'Oncology Letters',
    author: 'WEI QING LIU, JUN YANG, MIN HONG, CHANG E. GAO, JIAN DONG',
    year: 'May 6, 2016',
    url: '',
  },
  {
    author:
      'Ismaeel Muhamed, Jun Wu, Poonam Sehgal, Xinyu Kong, Arash Tajik, Ning Wang, Deborah E Leckband',
    title:
      'E-cadherin-mediated force transduction signals regulate global cell mechanics.',
    subtitle: 'Journal of cell science',
    year: 'May 1, 2016',
    url: '',
  },
  {
    title:
      'Molecular Basis of Non-β-Lactam Antibiotics Resistance in Staphylococcus aureus',
    subtitle:
      'Methicillin-resistant Staphylococcus aureus (MRSA) is one of the most successful human pathogens with the potential to cause significant morbidity and mortality. MRSA has acquired resistance to almost all β-lactam antibiotics, including the new-generation cephalosporins, and is often also resistant to multiple other antibiotic classes.',
    author: 'WEI QING LIU, JUN YANG, MIN HONG, CHANG E. GAO, JIAN DONG',
    year: 'May 13, 2002',
    url: '',
  },
  // Add more citations as needed
];
