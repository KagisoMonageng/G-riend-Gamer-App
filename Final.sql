PGDMP                          z            griendFinal_db    14.5    14.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24749    griendFinal_db    DATABASE     [   CREATE DATABASE "griendFinal_db" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
     DROP DATABASE "griendFinal_db";
                admin    false            �            1259    24750    comments    TABLE     �   CREATE TABLE public.comments (
    comment_id integer NOT NULL,
    gametag text NOT NULL,
    game_id integer NOT NULL,
    comment text NOT NULL,
    hidden boolean NOT NULL,
    date date NOT NULL,
    image text
);
    DROP TABLE public.comments;
       public         heap    admin    false            �            1259    24755    comments_comment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.comments_comment_id_seq;
       public          admin    false    209                       0    0    comments_comment_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.comments_comment_id_seq OWNED BY public.comments.comment_id;
          public          admin    false    210            �            1259    24756    gamers    TABLE     �  CREATE TABLE public.gamers (
    gamer_id integer NOT NULL,
    gametag character varying(50) NOT NULL,
    email character varying(255) NOT NULL,
    name character varying(50) NOT NULL,
    surname character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    gender character varying(50) NOT NULL,
    birthday character varying(50) NOT NULL,
    image character varying(255) NOT NULL,
    friends text[],
    games integer[]
);
    DROP TABLE public.gamers;
       public         heap    postgres    false            �            1259    24761    gamers_gamer_id_seq    SEQUENCE     �   CREATE SEQUENCE public.gamers_gamer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.gamers_gamer_id_seq;
       public          postgres    false    211                       0    0    gamers_gamer_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.gamers_gamer_id_seq OWNED BY public.gamers.gamer_id;
          public          postgres    false    212            �            1259    24762    games    TABLE       CREATE TABLE public.games (
    game_id integer NOT NULL,
    name text NOT NULL,
    publisher character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    category text,
    screenshots text[],
    full_name text,
    description text,
    url text
);
    DROP TABLE public.games;
       public         heap    postgres    false            �            1259    24767    games_game_id_seq    SEQUENCE     �   CREATE SEQUENCE public.games_game_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.games_game_id_seq;
       public          postgres    false    213                       0    0    games_game_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.games_game_id_seq OWNED BY public.games.game_id;
          public          postgres    false    214            p           2604    24768    comments comment_id    DEFAULT     z   ALTER TABLE ONLY public.comments ALTER COLUMN comment_id SET DEFAULT nextval('public.comments_comment_id_seq'::regclass);
 B   ALTER TABLE public.comments ALTER COLUMN comment_id DROP DEFAULT;
       public          admin    false    210    209            q           2604    24769    gamers gamer_id    DEFAULT     r   ALTER TABLE ONLY public.gamers ALTER COLUMN gamer_id SET DEFAULT nextval('public.gamers_gamer_id_seq'::regclass);
 >   ALTER TABLE public.gamers ALTER COLUMN gamer_id DROP DEFAULT;
       public          postgres    false    212    211            r           2604    24770    games game_id    DEFAULT     n   ALTER TABLE ONLY public.games ALTER COLUMN game_id SET DEFAULT nextval('public.games_game_id_seq'::regclass);
 <   ALTER TABLE public.games ALTER COLUMN game_id DROP DEFAULT;
       public          postgres    false    214    213                      0    24750    comments 
   TABLE DATA           ^   COPY public.comments (comment_id, gametag, game_id, comment, hidden, date, image) FROM stdin;
    public          admin    false    209   �       
          0    24756    gamers 
   TABLE DATA           |   COPY public.gamers (gamer_id, gametag, email, name, surname, password, gender, birthday, image, friends, games) FROM stdin;
    public          postgres    false    211   W                  0    24762    games 
   TABLE DATA           t   COPY public.games (game_id, name, publisher, image, category, screenshots, full_name, description, url) FROM stdin;
    public          postgres    false    213   �"                  0    0    comments_comment_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.comments_comment_id_seq', 33, true);
          public          admin    false    210                       0    0    gamers_gamer_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.gamers_gamer_id_seq', 29, true);
          public          postgres    false    212                       0    0    games_game_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.games_game_id_seq', 16, true);
          public          postgres    false    214            t           2606    24772    comments comments_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (comment_id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            admin    false    209            v           2606    24774    gamers gamers_email_key 
   CONSTRAINT     S   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_email_key UNIQUE (email);
 A   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_email_key;
       public            postgres    false    211            x           2606    24776    gamers gamers_gametag_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_gametag_key UNIQUE (gametag);
 C   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_gametag_key;
       public            postgres    false    211            z           2606    24778    gamers gamers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.gamers
    ADD CONSTRAINT gamers_pkey PRIMARY KEY (gamer_id);
 <   ALTER TABLE ONLY public.gamers DROP CONSTRAINT gamers_pkey;
       public            postgres    false    211            |           2606    24780    games games_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (game_id);
 :   ALTER TABLE ONLY public.games DROP CONSTRAINT games_pkey;
       public            postgres    false    213               �  x�ՔM��0��ʯ�۞�!�{��-J)�R�5���%WR캿�r�Ͷ{lɂh3WEE��5��9�%yܚ A*sZ�p;xlDHSr$E^	�I�-C��}�9���+�ܚv�8Ήf}�F&0;O�2�ʹi���KJ����c=l�/�l!�m�M8z%̯���Hz&����BT|�yWum��X����$vE��f�9� �#.pt
��H��)SusL�U���^�y�N���Y R�s���%�'j���m�7w�ҭ Y��Q�F����ofS���T�$�`#��3�W0i�JN>!�ʏ`0c#�Q�MS�9�Y��uY_~4�|�+h;�ۗ�(�m��N�UB��9�a�/�xIx��xRHoi�wu�f��Z��������V��E@�(�&_6S���/��v��o�����'t�^\      
   ,  x�Օ]k�0�����>����Ћ��fv��B�-MV,Kƒ�:��}��t)m�20��#��χ�@J��<D-�V�;+V�i��@�ɉ6���G{+��5!hCGP9S��v�{=��J��IM�q:%`ܯ�md [*x0t�P� � 3�!8XǠ�۰NE��I��j�	t�����e����5�j����X���q5k����j��KR3&�Y���u�-_)M�%1@����0��rlk���ez��0�q+������T`n�op�c�CX�"K��Z�k�= �I����ē*�L��~$d-Z*��_O��/�o.�F�b�ke�����8j����@��(-.�"�_W]C��f���f<4��t��J���;��h��a����Z�?�+LB�J�|)A��5�f��y���Q�Mw�A]+]�JE�"�duT���gI��ܾ�f��1�k����S��I�D�bd<7Ts�OS�#�5�3�rT﷬�gx�j�e�j�=oߘW�Xb~����}�g������G���#%�s|؎��~���d	����b��	����         �  x��Y�v�H]�W�����!��+�mW�����c��pRR
THJ�2����������)	0vu�q-l@dFF�x���{�^���[oy���4���ֹz��Bu�D�a��b�	d���tw�/E�����7��q���ݑ���kz����m�-���oӷypyw~>�/��M�η|ٺ��+g�֟7{]�7,V���Z<,��\�
����X���߱�+��L�B�8KE�;�J�0�LA@�W,�wFF�G�OgJ�v��Q��D�h��"\�|-/
Eۮ�~�<�7�4`���3R��eWaՋ3nZ�W�3�y��D��Y�Y��klҟtI��y�9�Ӂ@���Q�<�Ɂ�<�t�p1c�ۏw�sV)�暴.Bv�:�Y�VnEa!��R������k��S��/`:����Ϡ?�$��y!x�7d�mSD%�#�1���c<��, �d2�2��A����䆓r��T��)v,���`��v7��XՍ∛@�=m]Ǚ
��W_>�w��\h�*��Q׋�h<���Q0��`����O���[��u�y01��21w!s�uj�٨P���|�ɵ��e�9�����5 غZǋu��/7R�_ح(�Y9�{��,/��iJ�I ���:0z��-=�XB�0��d��1� ���+�S��:c�6�Gq�4/6p*;�;e��d!�B{�2��&�������DU��z�Q�)-�6�rkC���p��������4�N�5������Z���8J$��F
i��Q��q**�0�?ai�Հ/�9�S2�*���n�$�H8x�o �H1 ����v�s�����6��xc�X�:vG'��)U{غ���]돻���ǛWe�����Z9�0���������t���o�3G]���*�ҵ�B��R����l��T�TH�Z'bYH��j�XT�h阐�͗��;��3��*�\��?ؿJ��2��8�0��䅄��@A^��VuMఇ'U����fl ��+i��3��!?�R��Ͳ����}�q� �7�׃��b��G�Kc���us9g�2���ɕ ��SZɎ_j-3'�3�7��q��M`��S��ߌ��xP�0��-ڵz�q�������Hxр�E�RM�����'�7g�#�+C�ؗ8C�+8&{�M�f_���
;�(R����v�����l	[y�N`j2hG�wI�3'�y�'W��C>��-L i�*���"�L1��Ř*�Y$!"�T���1�i��|IIP��[i�If/;/s��eYd�\~��C�P�-HJu���J�[��N��&�w�"�����mDڬ��H���rQ\K�!��U&���+YV�R���F���F�"V)}Ut���������	�����'�]ee �s�B��]Az\	б�� /���$�)î�O8^Q�e�Vc�R�W$�Nó?�cwX*m�$:O�D�㇊j����e��bF/K��`��S���7�]	wF0<�q\'F�@J������~�>��d����9�U�m�����h�
!gB�H;�D�ژ:�lrN�Ԡm8/�R�Иk�l�I��՘A��n�ƨX���YR��ׯ���e!�1Ws��թ���y�1:�ԉN�V��P6y�����$��9�6Y�Ǫ��c#��&�l j�lړʏ6aw�#	�޸��7����`��&��	�?%f'�����Gk�Df�j��i���K�p�*{�)0|`�Ж�#�7����J9���X��5�Plc[�8��X�ւ!^��p�mײ%�}Ú;X27"RF���H�z�U�4[�v{��0^���C��p�uB"3 �_��߰9�؅� ��l7<z�C- ��5�>�5��FRe�A��<�WD�X1E�Q�~,�$^�;!�a�	!��7pe��.xn�%w��80�b�k��/�$��,i ='����^��'��M�,�<XMx�2%�m3�"4��ؖ�'�S����T�;u	����t�璫>r6��EmУ����E���Oo:A[<������/~(�O���v7�{������$�h��K\�Ռ؊��c8���H�:d�*��m��n�!Z	��&]&�]�9��1Hͦ��CȽY��׫���{�֧�s6��Tuԝ��D�@z� �.���.�^�:����_����X���<A��.��X�����3�Z���ڏ�^L�������Tq~�<��t�%ؐ ^׻�0T�X�~3�hr/���KP ��g�i�I2ط3�2�,����A��f�xh�	��m�L,�i^٧�{no8q8�;�/����x�S�� ?(h<\�,=)h�-�`�L3|�?��+���#�5�Ba���6-�Q#~�$P��4�ᑽΎFx)����Q��r���I6ߚV�`�[�iN���zУ����qh�v�����j����pBc��V�=��6{�~�'a�'�����a�]���}c�2J��Ŷ�J������R�~�U����]�����o��܋�靣pO���L����X�l�U�
�E�#��p<K*��:ڳVUhA�4�j�j���W���vv��>B�-'�Zo�����C��?M	�d~a��ɸ�����A4?D��;��C%�����~gy�Jh��\�ɪ����o�:��&`���&^�unb�������!��l����5C�K�#��)��pL_}D���7�D:̖&�o7��,n&Р�W��}����>�a{�7&��*Ɔf�
_���Mᚿ�zg:A;���`0��_������������O��R�߿=��P��]�b��˫��'�7�N��Ġ�5�H�3?��A8�<��ۑ�UDױ�*���-<��1!�VF!V�S�tkWz�ިu�vFq�M�B��j1qݳ���[��-�}�߽�������jv�u�|[����O&~�.�7p��`��|āT�v����{�Ϝ���-`s��1��������*�p_[Q�l������}^�Wo��v���� ���6     