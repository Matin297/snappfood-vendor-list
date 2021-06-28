export function requestErrorHandler(res) {
    if (res?.status === 400)
        return { status_name: 'error', data: res.data };

    if (res?.status === 401)
        return { status_name: 'error', msg: 'شما دسترسی برای تغییر ندارید' };

    if (res?.status === 404)
        return { status_name: 'error', msg: 'یافت نشد' };

    if (res?.status === 500)
        return { status_name: 'error', msg: 'خطا در گرفتن اطلاعات' };

    return { status_name: 'error', msg: 'مشکلی پیش آمده دوباره تلاش کنید.' };
}