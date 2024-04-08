import classNames from 'classnames'
import PropTypes from 'prop-types'

import Card from '~/components/Card/Card'
function TvSeries({ className, data, genres = [] }) {
    return (
        <div className={classNames('content-body pb-[70px]', { [className]: className })}>
            <div className="container flex flex-row flex-wrap content-center items-center mx-auto pt-[10px]">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                    {data.slice(3, 15).map((film) => {
                        return (
                            <Card
                                genresName={film.genre_ids.map((item_id) => {
                                    let nameGenre
                                    genres.forEach((item_id_name) => {
                                        if (item_id === item_id_name.id) {
                                            nameGenre = item_id_name.name
                                        }
                                    })
                                    return nameGenre
                                })}
                                key={film.id}
                                data={film}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
TvSeries.propTypes = {
    classNames: PropTypes.string,
    data: PropTypes.array,
    genres: PropTypes.array,
}
export default TvSeries
