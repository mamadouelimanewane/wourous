export const MOCK_USERS = [
    { id: 'USR-001', name: 'Amadou Diallo', email: 'amadou.d@gmail.com', status: 'verified', joinDate: '2023-11-15', balance: 1540000, kycLevel: 3, avatar: 'AD' },
    { id: 'USR-002', name: 'Sophie Ndiaye', email: 's.ndiaye@orange.sn', status: 'pending', joinDate: '2024-01-20', balance: 0, kycLevel: 1, avatar: 'SN' },
    { id: 'USR-003', name: 'Entreprise GoldCorp', email: 'contact@goldcorp.sn', status: 'verified', joinDate: '2023-09-10', balance: 45000000, kycLevel: 3, avatar: 'GC' },
    { id: 'USR-004', name: 'Moussa Konaté', email: 'm.konate@yahoo.fr', status: 'rejected', joinDate: '2024-02-01', balance: 0, kycLevel: 0, avatar: 'MK' },
    { id: 'USR-005', name: 'Fatou Sow', email: 'fatou.sow@design.com', status: 'verified', joinDate: '2023-12-05', balance: 320000, kycLevel: 2, avatar: 'FS' },
];

export const MOCK_TRANSACTIONS = [
    { id: 'TRX-8892', user: 'Amadou Diallo', type: 'buy', asset: 'Lingotin 50g', amount: 2280000, date: '2024-02-01T10:30:00', status: 'completed', paymentMethod: 'Orange Money' },
    { id: 'TRX-8893', user: 'Entreprise GoldCorp', type: 'buy', asset: 'Lingot 1kg', amount: 45250000, date: '2024-02-01T09:15:00', status: 'processing', paymentMethod: 'Virement Bancaire' },
    { id: 'TRX-8894', user: 'Fatou Sow', type: 'sell', asset: 'Napoléon 20F', amount: 280000, date: '2024-01-31T16:45:00', status: 'completed', paymentMethod: 'Espèces (Agence)' },
    { id: 'TRX-8895', user: 'Sophie Ndiaye', type: 'buy', asset: 'Lingotin 10g', amount: 460000, date: '2024-01-31T14:20:00', status: 'cancelled', paymentMethod: 'Wave' },
    { id: 'TRX-8896', user: 'Amadou Diallo', type: 'buy', asset: 'Lingotin 10g', amount: 460000, date: '2024-01-30T11:00:00', status: 'completed', paymentMethod: 'Orange Money' },
];

export const MOCK_INVENTORY = [
    { id: 'INV-001', name: 'Lingot d\'Or 1kg (Wourous)', sku: 'XAU-1K-WOU', stock: 12, reserved: 2, weight: 1000, minStock: 5 },
    { id: 'INV-002', name: 'Lingotin 100g Valcambi', sku: 'XAU-100-VAL', stock: 45, reserved: 5, weight: 100, minStock: 20 },
    { id: 'INV-003', name: 'Lingotin 50g Heraeus', sku: 'XAU-50-HER', stock: 28, reserved: 0, weight: 50, minStock: 15 },
    { id: 'INV-004', name: 'Once d\'Or Krugerrand', sku: 'XAU-1OZ-KRU', stock: 150, reserved: 12, weight: 31.1, minStock: 50 },
    { id: 'INV-005', name: 'Napoléon 20 Francs', sku: 'XAU-20F-NAP', stock: 320, reserved: 45, weight: 6.45, minStock: 100 },
];

export const MOCK_STATS = {
    revenue: 154250000,
    revenueGrowth: 12.5,
    totalUsers: 1245,
    userGrowth: 8.2,
    goldStockKg: 24.5,
    activeOrders: 18
};
